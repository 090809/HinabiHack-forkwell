<template>
    <b-row>
        <b-col cols="8">
            <div id="listgroup" class="text-left position-relative">
                <b-card
                        title="Vision"
                        id="vision"
                        class="my-4"
                        style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
                >
                    <b-card-body>
                        <span style="color: darkgrey">blank</span>
                    </b-card-body>
                </b-card>
                <b-card
                        title="Skills"
                        id="skills"
                        class="my-4"
                        style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
                >
                    <b-card-body>
                        <span style="color: darkgrey">blank</span>
                    </b-card-body>
                </b-card>
                <b-card
                        title="Current situation"
                        id="current-situation"
                        class="my-4"
                        style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
                >
                    <b-card-body>
                        <span style="color: darkgrey">blank</span>
                    </b-card-body>
                </b-card>
                <b-card
                        title="Preferred technology"
                        id="preferred-technology"
                        class="my-4"
                        style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
                >
                    <b-card-body>
                        <span style="color: darkgrey">blank</span>
                    </b-card-body>
                </b-card>
                <b-card
                        title="Preferences"
                        id="preferences"
                        class="my-4"
                        style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
                >
                    <b-card-body>
                        <span style="color: darkgrey">blank</span>
                    </b-card-body>
                </b-card>
            </div>
        </b-col>
        <b-col
                cols="4"
                class="text-left"
                style="position: sticky;top: 20px;display: block;height: 28em;"
        >
            <b-button size="lg" variant="primary" disabled style="padding: 15px 50px;"
            >Edit profile</b-button
            >
            <br />
            <label>Last updated: 2019/06/30</label>
            <b-navbar v-b-scrollspy vertical class="spyable">
                <b-nav class="flex-column">
                    <b-nav-item href="#vision">Vision</b-nav-item>
                    <b-nav-item href="#skills">Skills</b-nav-item>
                    <b-nav-item href="#current-situation">Current situation</b-nav-item>
                    <b-nav-item href="#preferred-technology">Preferred technology</b-nav-item>
                    <b-nav-item href="#preferences">Preferences</b-nav-item>
                </b-nav>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>

    export default {
        name: "preferences",
    };
</script>

<style scoped>
    .spyable .nav-item {
        border-left: 3px solid transparent;
    }
    .spyable .nav-item.active {
        border-left: 3px solid #2962ff;
    }
</style>
