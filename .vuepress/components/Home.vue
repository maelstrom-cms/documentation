<template>
    <div class="theme-container" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
        <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

        <main>

            <section class="flex flex-wrap">

                <div>
                    <h1>maelstrom blah</h1>

                    <p>react laravel etc</p>

                    <div>
                        <button>
                            go to docs
                        </button>
                        <button>
                            view a demo
                        </button>
                    </div>
                </div>

                <div>
                    <img src="" alt="image">
                </div>

            </section>

            <section>
                <h2>features & why</h2>
                <p></p>

                <div class="flex flex-wrap justify-between">
                    <h3>laravel</h3>
                    <p>blah</p>

                    <h3>react</h3>
                    <p>blah</p>

                    <h3>ant d</h3>
                    <p>blah</p>

                    <h3>tailwind</h3>
                    <p>blah</p>
                </div>


            </section>

            <section>
                <h2>pricing</h2>
                <p>pay what you like</p>
                <button>pay</button>
            </section>

            <section>
                <h2>Example panel</h2>

                <div>
                    screen shots
                    screen shots
                    screen shots
                    screen shots
                    screen shots
                </div>

                <div>
                    <div>
                        controller
                    </div>
                    <div>
                        template
                    </div>
                </div>

            </section>

        </main>

    </div>
</template>

<script>
import Layout from '@vuepress/theme-default/layouts/Layout'

export default {
    mixins: [ Layout ],
}
</script>

<style scoped>
    .theme-container {
        padding-top: 3.6rem;
    }
</style>
