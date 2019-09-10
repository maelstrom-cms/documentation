# Panel API

The main powerhouse behind a controller is the `\Maelstrom\Panel::class` class.

It is designed in such a way to be as flexible as humanly possible, everything has been designed with `public` visibility, allowing you to easily call or modify anything you need.

The composition of the class is based round a God Object/Class architecture, which some might see as a bad decision, however unlike other systems which either extend other classes, use traits, or break out entities into smaller classes, we keep everything in a single place making it much easier for developers to change what they need.

::: tip
To find out various ways of making modifications to our panel you can read our [related docs](../advance/custom-panels.md).
:::

```php
/**
 * When displaying the name of resource, we use this field.
 *
 * @var string
 */
public $nameField = 'name';

/**
 * This houses the name of the entity to display, e.g. "User"
 * We try calculate this from the class name if you don't supply one.
 *
 * @var string
 */
public $entityName;

/**
 * An instance of the query builder for the provided model,
 * this is what all the queries are executed against.
 *
 * @var Builder
 */
public $query;

/**
 * When editing - this is populated with the
 * entry via the setEntry() method - When it's empty
 * we assume we're not editing.
 *
 * @var Model
 */
public $entry;

/**
 * An instance of the Illuminate request,
 * this houses things such as active filters, uploaded files etc.
 * We do modify this occasionally so if you also need to mutate it
 * make sure you use the instance on the panel e.g. $panel->request
 *
 * @var Request
 */
public $request;

/**
 * When on the index page or in the trash, this is how many
 * items will show per page.
 * It's over written via the "per_page" query string.
 *
 * @var int
 */
public $perPage = 10;

/**
 * When populated is an object containing a column and search query via the query string "search".
 *
 * { "query": "mr jones", "column" => "name" }
 *
 * @var object|null
 */
public $search = null;

/**
 * When populated is an object of filters that are enabled via the query string "filters".
 *
 * { "category.name": [2], "year": [2003] }
 *
 * Filtering of the query must be handled by you via the setFilterHandler() method.
 *
 * @var object|null
 */
public $filters = null;

/**
 * When populated is an object containing the sorting configuration via the query string "sort"
 *
 * { "column": "name", "direction" => "ascend" }
 *
 * @var object|null
 */
public $sort = null;

/**
 * When no sort order is defined via the query string, you can fall back to a default
 * sorting, which is defined by ->setDefaultSorting('name', 'desc')
 *
 * @var string|null
 */
public $defaultSortColumn = null;

/**
 * Sets the direction of ordering when using ->setDefaultSorting();
 *
 * @var string
 */
public $defaultSortDirection = 'asc';

/**
 * If this is set to true - the queries get scoped
 * to only showing the items in the trash. Normally only used
 * when the model uses the SoftDeletes trait.
 *
 * @var bool
 */
public $inTrash = false;

/**
 * Flags if this entity uses the SoftDeletes trait,
 * if it doesn't - then certain features are hidden like the trash.
 *
 * @var bool
 */
public $isTrashable = false;

/**
 * This contains an index of all the named
 * routes for the entity e.g. "page.update".
 *
 * @var array
 */
public $routes;

/**
 * As filter logic is unique to each database structure, you must create the filter
 * logic yourself, we pass you all the data you need once you define a setFilterHandler().
 *
 * @var Closure|null
 */
public $filterHandler = null;

/**
 * We provide basic "LIKE" search - however if you need a more advance search
 * you can provide one via the setSearchHandler method.
 *
 * @var Closure|null
 */
public $searchHandler = null;

/**
 * We provide a simple file uploader, however if you need more configuration
 * you can define your own via setUploadHandler.
 *
 * @var Closure|null
 */
public $uploadHandler = null;

/**
 * We provide a simple image manipulator, however if you need more configuration
 * you can define your own via setImageProcessingHandler.
 *
 * @var Closure|null
 */
public $imageProcessingHandler = null;

/**
 * You can define a one-off hook to execute before
 * the data is passed to the save methods allowing you a final
 * opportunity to manipulate data.
 *
 * @var Closure|null
 */
public $beforeSave;

/**
 * When building the index page and displaying the table, you might want to show
 * customised or specific data in the tables, you can provide a data transformer which
 * takes each model and returns the data you want to display on the table.
 *
 * It's common to use a Laravel Resource to do this via the setEntriesTransformer method.
 *
 * @var Closure|null
 */
public $entriesTransformer = null;

/**
 * Sometimes a full entry transformer is overkill, and you just want some
 * extra attributes added before the view is rendered, this is useful if you have
 * accessors that you want to add to the serialisation process e.g.
 *
 * $category->post_count = $category->posts->count();
 *
 * @var array
 */
public $with = [];

/**
 * Any names of relationships defined here will be eager loaded
 * on the index page. e.g. $panel->setEagerLoad(['categories', 'tags'])
 *
 * @var array
 */
public $eagerLoad = [];

/**
 * A key/value map defined via setRelationships(), this maps the name
 * of posted data to the name of a relationship method
 *
 * e.g. "category_id" => "category" will populate any data within the $request->get('category_id')
 * into the relationship "category()" on your model.
 *
 * @var array
 */
public $relationships = [];

/**
 * Contains mapping of form fields to upload configurations. e.g.
 *
 * setUploadables([
 *     'avatar' => [
 *          'disk' => 'public',
 *          'path' => 'avatars',
 *          'resize' => [400, 400],
 *          'crop' => [400, 400],
 *     ],
 *     'gallery' => [
 *          'disk' => 'public',
 *          'path' => '',
 *          'resize' => [2000, 2000],
 *          'crop' => false,
 *     ]
 *     'downloads' => [
 *          'disk' => 'public',
 *          'path' => 'files',
 *     ]
 * ]);
 *
 * @var array
 */
public $uploadables = [];

/**
 * When a file has been uploaded during the "update" or "store"
 * process, we cache them into this array for retrieval.
 *
 * It contains the final saved path of the uploaded file.
 *
 * @var array
 */
public $uploaded = [];

/**
 * Can be used to house the index table heading configuration.
 * This is optional, just make sure you pass a $columns to the table component.
 *
 * @var array
 */
public $tableHeadings = [];

/**
 * Stores the start of the breadcrumb trail, e.g if you have an admin area
 * that you want all breadcrumbs prefixed with you can set it here.
 *
 * By default you can set this in the maelstrom.php config in the following format.
 *
 * [
 *    [ "label" => "Maelstrom", "route" => "/" ],
 *    [ "label" => "Admin", "route" => "/admin" ]
 * ]
 *
 * @var array
 */
public $breadcrumbRoot = [];

/**
 * @param Builder|string $model
 * @param Request $request
 * @throws BindingResolutionException
 */
public function __construct($model, Request $request = null)

/**
 * Takes either an instance of the query builder from a model
 * or the name of a class to instantiate e.g. App\Page::class
 * All queries/logic will hang of this model.
 *
 * @param $modelOrQueryBuilder
 * @return Panel
 * @throws BindingResolutionException|InvalidArgumentException
 */
public function setupModel($modelOrQueryBuilder): Panel

/**
 * Configures and parses the query strings for various things such
 * as filters, items per page etc.
 *
 * @return $this
 */
public function setupQueryStrings(): Panel

/**
 * Sets the entity name automatically to the class name
 * however, to overwrite this just call setEntityName() yourself.
 *
 * @return $this
 */
public function setupEntityName(): Panel

/**
 * Tries to guess the route mapping from the class name.
 * This is unlikely to be write for a lot of the time.
 * So just call setRoutes() yourself if you need.
 *
 * @param null $prefix
 * @return $this
 */
public function setupRoutes($prefix = null): Panel

/**
 * Attempts to enable the withTrashed model scope if needed.
 *
 * @return $this
 */
public function setupTrash(): Panel

/**
 * Sets the initial breadcrumb root.
 *
 * @return $this
 */
public function setupBreadcrumbs(): Panel

/**
 * Allows you to handle the uploads yourself, if you provide a handler
 * "handleUploadables()" will not get called.
 *
 * Your closure will receive:
 *
 * closure($files, $uploadMappings, $entry, $panel)
 *
 * You just need to pass back an array of uploaded paths to save in the database.
 *
 * @param $handler
 * @return Panel
 */
public function setUploadHandler($handler): Panel

/**
 * If you want a custom image processor uploading, you can pass a closure
 * in here and we'll execute this instead of "handleUploadedImage".
 *
 * You just need to return back the Image instance itself once you're done.
 *
 * @param $handler
 * @return Panel
 */
public function setImageProcessingHandler($handler): Panel

/**
 * Defines the function which should be used to filter the
 * entries for the index page.
 *
 * @param Closure $handler
 * @return Panel
 */
public function setFilterHandler(Closure $handler): Panel

/**
 * This isn't used by default - but if you need a custom search
 * handler, you can define one here.
 *
 * @param Closure $handler
 * @return Panel
 */
public function setSearchHandler(Closure $handler): Panel

/**
 * Sets the function which is used to transform each entry
 * before it is returned to the table on the index.
 *
 * @param Closure $transformer
 * @return Panel
 */
public function setEntriesTransformer(Closure $transformer): Panel

/**
 * Sets the default routes to display at the start of all breadcrumbs.
 *
 * @param array $routes
 * @return Panel
 */
public function setBreadcrumbRoot(array $routes): Panel

/**
 * Defines the relationships to use during "handleRelationships". Should be a mapping of
 * request field name -> relationship method on the model. e.g.
 *
 * setRelationships([
 *      'category_id' => 'category',
 *      'tags' => 'tags',
 * ])
 *
 * Will eventually execute:
 *
 * $entry->category()->associate($request->get('category_id'))
 *
 * and
 *
 * $entry->tags()->sync($request->get('tags'))
 *
 * @param array $relationships
 * @return Panel
 */
public function setRelationships(array $relationships = []): Panel

/**
 * Defines the relationships to eager load on the index page.
 *
 * @param array $relationships
 * @return Panel
 */
public function setEagerLoad(array $relationships): Panel

/**
 * Defines the currently active entry, normally you call this
 * at the start of your edit methods to load the model into Maelstrom.
 *
 * @param Model $entry
 * @return Panel
 */
public function setEntry(Model $entry): Panel

/**
 * Sets how many items per page should be displayed.
 *
 * @param int $perPage
 * @return Panel
 */
public function setPerPage(int $perPage): Panel
/**
 * Stores the configuration mapping for your uploadables.
 * Only fields defined in here will get excluded from basic casting
 * to the database on save, if you don't define them here likely
 * your database will end up with paths such as "/tmp/php/dhHytsoqk23jd" inside.
 *
 * It should be used in a way similar to
 *
 * setUploadables([
 *     'avatar' => [
 *          'disk' => 'public',
 *          'path' => 'avatars',
 *          'resize' => [400, 400],
 *          'crop' => [400, 400],
 *     ],
 *     'gallery' => [
 *          'disk' => 'public',
 *          'path' => '',
 *          'resize' => false,
 *          'crop' => false,
 *     ]
 *     'downloads' => [
 *          'disk' => 'public',
 *          'path' => 'files',
 *     ]
 * ]);
 *
 * @param array $uploadables
 * @return Panel
 */
public function setUploadables(array $uploadables): Panel

/**
 * If the route guessing doesn't work you can define them explicitly.
 *
 * @param $routes
 * @return $this
 */
public function setRoutes($routes): Panel

/**
 * Sets which attribute should be used as the main name of a single entity.
 *
 * @param string $nameField
 * @return Panel
 */
public function setNameField(string $nameField): Panel

/**
 * Allows you to explicitly define the name of the entity you're using.
 * You should always provide the singular version e.g. "Page" NOT "Pages"
 *
 * When you request back the entity name via "getEntityName" you have the option
 * to pluralise it then.
 *
 * @param string $entityName
 * @return Panel
 */
public function setEntityName(string $entityName): Panel

/**
 * Allows you to define all the table headings for the index view.
 *
 * This is optional - However just make sure you provide $columns to the table component.
 *
 * @param array $tableHeadings
 * @return Panel
 */
public function setTableHeadings(array $tableHeadings): Panel

/**
 * A simple helper function which takes the entity named defined
 * by "setEntityName" and either returns it, or pluralises it.
 *
 * Used on various things such as breadcrumbs, page titles etc.
 *
 * @param bool $asPlural
 * @return string
 */
public function getEntityName(bool $asPlural = false): string

/**
 * Returns a list of the user defined breadcrumbs with the root
 * breadcrumbs appended to the start.
 *
 * @param array $crumbs
 * @return array
 */
public function getBreadcrumbs(array $crumbs = []): array

/**
 * If we've loaded an entry via setEntry() e.g. on the edit page
 * then we can get an instance of the entry back.
 *
 * If we haven't this will return null - so we know if we're editing or not.
 *
 * @return Model
 */
public function getEntry(): ?Model

/**
 * If an entry is loaded, it will return the primary key for it.
 *
 * @return string|null
 */
public function getEntryId(): ?string

/**
 * Displays the name of the entry as defined by the $this->nameField
 * used in places such as the page title when editing.
 *
 * @return string|null
 */
public function getEntryName(): ?string

/**
 * Returns a list of entries for the table view,
 * it applies all eager loaded relationships, sorting, filtering etc.
 *
 * @return LengthAwarePaginator
 */
public function getEntries(): LengthAwarePaginator

/**
 * The straight forward getter to return the defined eager loaded relationships from setEagerLoad.
 *
 * Everything stored within here will get attached to the getEntries query.
 *
 * @return array
 */
public function getEagerLoad(): array

/**
 * The straight forward getter to return the defined relationships from setRelationships.
 *
 * Everything stored within here will get mapped up during "handleRelationships()"
 *
 * @return array
 */
public function getRelationships(): array

/**
 * Returns a fully resolved URL for a default resourceful controller route.
 *
 * @param string $action
 * @param $entry
 * @return string
 */
public function getRoute(string $action, $entry = null): string

/**
 * Returns an array of routes pre-populated for each entry.
 * We do this in PHP as the javascript doesn't know where to go.
 *
 * @param $entry
 * @return array
 */
public function getRoutes($entry = 'placeholder'): array

/**
 * Returns an array of data from the POST/PUT request
 * it only extracts data from the request which has been defined
 * as $fillable on the model. So if you're one of those crazy people who
 * like to un-guard everything, there's no place for you here.
 *
 * If any uploaded files have been attached, it also merges those into the data.
 *
 * @return array
 */
public function getFillableData(): array

/**
 * The straight forward getter to return the defined
 * attributes to append from setWithAttributes();
 *
 * @return array
 */
public function getWithAttributes(): array

/**
 * Returns back the configuration mapping provided by "setUploadables()"
 *
 * @return array
 */
public function getUploadables(): array

/**
 * Returns the raw path for an uploaded file by the field name in the request,
 * if it's an array of files you'll get a merged array of the old files with new files.
 *
 * e.g. it turns
 *
 * Request([
 *    "gallery": [
 *       UploadedFile,
 *       UploadedFile,
 *       "https://www.maelstrom-cms.com/storage/gallery/image3.jpg",
 *       "https://www.maelstrom-cms.com/storage/gallery/image4.jpg",
 *    ]
 * ])
 *
 * into
 *
 * Request([
 *    "gallery": [
 *      "storage/gallery/image1.jpg",
 *      "storage/gallery/image2.jpg",
 *      "storage/gallery/image3.jpg",
 *      "storage/gallery/image4.jpg",
 *   ]
 * ])
 *
 * @param $field
 * @param $data
 * @return array|string $mixed
 */
public function getUploadedFiles(string $field, $data): string | array

/**
 * Returns a list of columns from the db table.
 *
 * @return array
 */
public function getColumns(): array

/**
 * Returns the name of the attribute used for the main name of a single entity.
 *
 * @return string
 */
public function getNameField(): string

/**
 * Returns how many items per page should be shown.
 *
 * @return int
 */
public function getPerPage(): int

/**
 * If you've used setTableHeadings() then you can get them back!
 *
 * We call this within the index() method to define which headings to display on the table,
 * it normally populates the $columns variable for the index view.
 *
 * @return array
 */
public function getTableHeadings(): array

/**
 * This effectively executes the final query
 * which returns the results after any transformations
 * have been applied.
 *
 * @return LengthAwarePaginator
 */
public function applyPagination(): LengthAwarePaginator

/**
 * Here we apply the transformations to each entry that comes back
 * from the query.
 *
 * We use a custom one "panelRoutes" to know where to send things, however
 * if an additional transformer is supplied via setEntriesTransformer()
 * each item will get passed through this before returning it to the view.
 *
 * @param LengthAwarePaginator $pagination
 * @return LengthAwarePaginator
 */
public function applyTransformations(LengthAwarePaginator $pagination): LengthAwarePaginator

/**
 * Applies any default filters such as trash, then if a filter handler
 * has been defined, will execute that allowing user provided filters to be applied.
 *
 * @return Panel
 */
public function applyFilters(): Panel

/**
 * Takes what was defined by the $sort query string and applies
 * the ordering to the query.
 *
 * We check that the ordering is a valid db column to help prevent any
 * sql injection attempts, as well as manually passing in the direction.
 *
 * If you're going to overwrite this, we recommend you do the same.
 *
 * @return Panel
 */
public function applySorting(): Panel

/**
 * Either applies the default search logic which uses a simple
 * LIKE query, or executes a previously defined searchHandler.
 *
 * @return Panel
 */
public function applySearchQuery(): Panel

/**
 * If we're trying to view a model which has the trait SoftDeletes
 * then the route/model binding will say the model doesn't exist
 * and throws a 404.
 *
 * However we'll still allow users to see it, with a small message to let them know,
 * but to do this we need to overwrite the route binding and add withTrashed()
 * so that it doesn't 404.
 *
 * @return $this
 */
public function applyTrashScope(): Panel

/**
 * Attaches the defined relationships to eager load them
 *
 * This only runs on the getEntries() not getEntry().
 *
 * @return $this
 */
public function applyRelationships(): Panel

/**
 * Lets you know if the current entry is in the trash or not.
 *
 * @return bool
 */
public function isEntryTrashed(): bool

/**
 * Checks if the column exists on the model to help prevent sql injection.
 *
 * @param $column
 * @return bool
 */
public function isValidColumn($column): bool

/**
 * Takes the mappings defined by "setRelationships" looks within the post request
 * for the fields that you've defined e.g "category_id" then it inserts the value
 * provided from the request into the associated relationship e.g. "category()".
 *
 * @return Panel
 * @throws ReflectionException
 */
public function handleRelationships(): Panel

/**
 * Provides access to some default basic bulk actions.
 *
 * @return bool|string
 */
public function handleBulkActions(): string

/**
 * Runs only once, so that files are not uploaded twice.
 *
 * Will either execute your custom "uploadHandler" or...
 *
 * Loops around all of your defined uploadables via "setUploadables" and uploads them
 * to the defined disk within the config, if the file has an image mime type, then
 * it can be passed off to intervention for additional processing.
 *
 * The only updates the "$this->uploaded" array so you can use the data elsewhere.
 *
 * It only gets assigned back to the post data within the "getFillableData()"
 *
 * @return array
 */
public function handleUploadables(): array

/**
 * If the upload is an image, then we can allow for some additional processing.
 * You can overwrite the built in processing by using the "setImageProcessingHandler"
 * and passing in a closure to execute instead, once you pass back the Image.
 * We save it and move on!
 *
 * @param UploadedFile $file
 * @param $config
 * @return string
 */
public function handleUploadedImage(UploadedFile $file, array $config = []): string

/**
 * A basic image processing method, takes an Image object provided by
 * Intervention, and a configuration. Can be used independently from
 * everything else as only uses the data passed in.
 *
 * It's only called if no custom image processor is defined, however if you want
 * to call it in your custom handler, you can do so e.g. $panel->handleImageProcessing($image, $config).
 *
 * @param $image
 * @param $config
 * @return Image
 */
public function handleImageProcessing(Image $image, array $config): Image

/**
 * Defines a single use hook which executes before the data is
 * returned to $entry->fill() - it gives you a final chance
 * to manipulate the data before it goes into the database.
 *
 * You get given a copy of the $data, an instance of the entry if it exists,
 * it might be null if you're not editing! you also get a copy of the request.
 * Finally we give you an instance of the whole panel just in case.
 *
 * Once you've made your changes you must return the $data back
 * otherwise you'll have nothing save.
 *
 * @param Closure $hook
 */
public function beforeSave(Closure $hook)

/**
 * A helper method to return the index view with
 * some basic data attached.
 *
 * You don't need to use this, but the default templates will
 * expect an $entries and $columns variable.
 *
 * @param $view
 * @return View
 */
public function index(string $view): View

/**
 * A helper method to return the view for the create screen.
 *
 * Completely optional, but works for most basic use cases.
 *
 * @param $view
 * @param $formAction
 * @return View
 */
public function create(string $view, $formAction = null): View

/**
 * A simple "store" helper which handles typical relationships and uploads.
 *
 * It also allows you to define a flash message on success.
 *
 * Feel free to extend, or create your version!
 *
 * @param string $successMessage
 * @return Model
 * @throws ReflectionException
 */
public function store(string $successMessage = null): Model

/**
 * A helper method to return the view for the edit screen.
 *
 * Completely optional, but works for most basic use cases.
 *
 * @param $view
 * @param $formAction
 * @return View
 */
public function edit($view, $formAction = null): View

/**
 * A simple "update" helper which handles typical relationships and uploads.
 *
 * It also allows you to define a flash message on success.
 *
 * Feel free to extend, or create your version!
 *
 * @param string $successMessage
 * @return Model
 * @throws ReflectionException
 */
public function update(string $successMessage = null): Model

/**
 * A slightly naughty function for ease of use.
 *
 * This will delete the model that's associated with $this->setEntry()
 *
 * If the model passed in is already deleted, e.g. uses SoftDeletes and you
 * call the method again, it will restore it.
 *
 * @param string|null $successMessage
 * @return Model
 * @throws Exception
 */
public function destroy(string $successMessage = null): Model

/**
 * If you need to return a redirect response for a specific route.
 *
 * @param $routeName
 * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
 */
public function redirect($routeName)
```

### Custom Handlers on Classes

If you're extending the `Maelstrom\Panel::class` then instead of using the API to define handlers such as the Filter or Search handler you can define this methods directly on the class e.g.

```php
class PagePanel extends Panel
{
    public function entriesTransformer()
    {
        // ...
    }
    
    public function imageProcessingHandler()
    {
        // ...
    }
    
    public function uploadHandler()
    {
        // ...
    }
    
    public function filterHandler()
    {
        // ...
    }
    
    public function searchHandler()
    {
        // ...
    }
    
}
```
