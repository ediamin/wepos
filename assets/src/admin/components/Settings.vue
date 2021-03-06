<template>
    <div class="wepos-settings">
        <h2 style="margin-bottom: 15px;">{{ __( 'Settings', 'wepos' ) }}</h2>

        <div id="setting-message_updated" class="settings-error notice is-dismissible" :class="{ 'updated' : isUpdated, 'error' : !isUpdated }" v-if="isSaved">
            <p><strong v-html="message"></strong></p>
            <button type="button" class="notice-dismiss" @click.prevent="isSaved = false">
                <span class="screen-reader-text">{{ __( 'Dismiss this notice.', 'wepos' ) }}</span>
            </button>
        </div>

        <div class="wepos-settings-wrap">
            <h2 class="nav-tab-wrapper">
                <template v-for="section in settingSections">
                    <a href="#" class="nav-tab" :class="{ 'nav-tab-active': currentTab === section.id }" @click.prevent="changeTab(section)"><span class="dashicons" :class="section.icon"></span> {{ section.title }}</a>
                </template>
            </h2>

            <div class="metabox-holder">
                <template v-for="(fields, index) in settingFields" v-if="isLoaded">
                    <div :id="index" class="group" v-show="currentTab===index">
                        <form method="post" action="options.php">
                            <input type="hidden" name="option_page" :value="index">
                            <input type="hidden" name="action" value="update">
                            <h2>{{ showSectionTitle( index ) }}</h2>
                            <table class="form-table">
                                <tbody>
                                    <fields v-for="(field, fieldId) in fields"
                                        :section-id="index"
                                        :id="fieldId"
                                        :field-data="field"
                                        :field-value="settingValues[index]"
                                        @openMedia="showMedia"
                                        :key="fieldId"
                                    ></fields>
                                </tbody>
                            </table>
                            <p class="submit"><input type="submit" name="submit" id="submit" class="button button-primary" :value="__( 'Save Changes', 'wepos' )" @click.prevent="saveSettings( settingValues[index], index )"></p>
                        </form>
                    </div>
                </template>
            </div>

            <div class="loading" v-if="showLoading">
                <loading></loading>
            </div>
        </div>
    </div>

</template>

<script>
    let Loading = wepos_get_lib('Loading');
    import Fields from "admin/components/Fields.vue"

    export default {

        name: 'Settings',

        components: {
            Fields,
            Loading
        },

        data () {
            return {
                isSaved: false,
                showLoading: false,
                isUpdated: false,
                isLoaded: false,
                message: '',
                currentTab: null,
                settingSections: [],
                settingFields: {},
                settingValues: {}
            }
        },

        methods: {
            changeTab( section ) {
                var activetab = '';
                this.currentTab = section.id;

                if ( typeof( localStorage ) != 'undefined' ) {
                    localStorage.setItem( "activetab", this.currentTab );
                }
            },

            showSectionTitle( index ) {
                return window._.findIndex( this.settingSections, { id:index} ).title;
            },

            fetchSettingValues() {
                var self = this,
                    data = {
                        action: 'wepos_get_setting_values',
                        nonce: wepos.nonce
                    };

                self.showLoading = true;

                jQuery.post( wepos.ajaxurl, data, function(resp) {
                    if ( resp.success ) {

                        Object.keys( self.settingFields ).forEach( function( section, index ) {
                            Object.keys( self.settingFields[section] ).forEach( function( field, i ) {

                                if (!self.settingValues[section]) {
                                    self.settingValues[section] = {};
                                }

                                if ( typeof( resp.data[section][field] ) === 'undefined' ) {
                                    if ( typeof( self.settingFields[section][field].default ) === 'undefined' ) {
                                        self.settingValues[section][field] = '';
                                    } else {
                                        self.settingValues[section][field] = self.settingFields[section][field].default;
                                    }
                                } else {
                                    self.settingValues[section][field] = resp.data[section][field];
                                }
                            });
                        });

                        self.settingValues = jQuery.extend( {}, self.settingValues );

                        self.showLoading = false;
                        self.isLoaded = true;
                    }
                });
            },

            showMedia( data, $event ) {
                var self = this;

                var file_frame = wp.media.frames.file_frame = wp.media({
                    title: this.__( 'Choose your file', 'wepos' ),
                    button: {
                        text: this.__( 'Select', 'wepos' ),
                    },
                    multiple: false
                });

                file_frame.on( 'select', function () {
                    var attachment = file_frame.state().get('selection').first().toJSON();
                    self.settingValues[data.sectionId][data.name] = attachment.url;
                });

                file_frame.open();
            },

            saveSettings( fieldData, section ) {
                var self = this,
                    data = {
                        action : 'wepos_save_settings',
                        nonce: wepos.nonce,
                        settingsData: fieldData,
                        section: section
                    };
                self.showLoading = true;

                jQuery.post( wepos.ajaxurl, data )
                    .done( function ( response ) {
                        var settings = response.data.settings;
                        self.isSaved = true;
                        self.isUpdated = true;
                        self.message = response.data.message;
                        self.settingValues[ settings.name ] = settings.value;
                    } )
                    .fail( function ( jqXHR ) {
                        var messages = jqXHR.responseJSON.data.map( function ( error ) {
                            return error.message;
                        } );

                        alert( messages.join( ' ' ) );
                    } )
                    .always( function () {
                        self.showLoading = false;
                    } );
            }
        },

        created() {
            this.fetchSettingValues();

            this.currentTab = 'wepos_general';
            if ( typeof(localStorage) != 'undefined' ) {
                this.currentTab = localStorage.getItem("activetab") ? localStorage.getItem("activetab") : 'wepos_general';
            }

            this.settingSections = wepos.settings_sections;
            this.settingFields = wepos.settings_fields;
        },
    };

</script>

<style lang="less">
    .wepos-settings-wrap {
        position: relative;
        display: flex;
        border: 1px solid #c8d7e1;

        .loading{
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba( 255,255,255, 0.6);

            .wepos-loader {
                top: 40%;
                left: 45%;
            }
        }

        .dashicons {
            padding-top: 2px;
            margin-right: 5px;

            &.dashicons-admin-generic {
                color: #6c75ff;
            }

            &.dashicons-cart {
                color: #00aeff;
            }

            &.dashicons-money {
                color: #d35400;
            }

            &.dashicons-admin-page {
                color: #8e44ad;
            }

            &.dashicons-admin-appearance {
                color: #3498db;
            }

            &.dashicons-networking {
                color: #1abc9c;
            }
        }

        h2.nav-tab-wrapper {
            flex: 1;
            border-bottom: none;
            padding: 0;
            background: #f1f1f1;
            border-right: 1px solid #c8d7e1;

            a {
                float: none;
                display: block;
                margin: 0;
                border: none;
                padding: 13px 13px;
                background: #f1f1f1;
                font-weight: 500;
                border-bottom: 1px solid #c8d7e1;
                transition-property: none;
                transition:none;

                &.nav-tab-active {
                    background: #fff !important;
                    border-right: 1px solid #c8d7e1;
                    width: 99%;
                    color: #2e4453;
                    transition:none;
                    transition-property: none;
                }

                &:focus,
                &:active,
                &:visited,
                &:hover {
                    outline: none;
                    box-shadow: none;
                }
            }
        }

        .metabox-holder {
            flex: 3;
            padding-left: 3%;
            padding-right: 10px;
            background: #fff;
        }

        .radio-image-container {
            .radio-image {
                display: block;
                width: 50%;
                background: #fff;
                -webkit-box-shadow: 0 1px 1px 0 rgba( 0, 0, 0, 0.1 );
                box-shadow: 0 1px 1px 0 rgba( 0, 0, 0, 0.1 );
                margin: 0 0 15px;
                position: relative;
                line-height: 0;
                border: 1px solid #ededed;
                padding: 4px;

                img {
                    max-width: 100%;
                    z-index: 1;
                }

                .current-option-indicator {
                    position: absolute;
                    top: 0;
                    right: 0;
                    background-color: #4CAF50;
                    color: #fff;
                    padding: 4px;
                    z-index: 2;
                    line-height: 1.4;
                }

                .active-option {
                    opacity: 0;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 3;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.45);
                    transition: opacity 0.4s ease;

                    button {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-top: -23px;
                        margin-left: -58px;
                    }
                }

                &:hover {
                    .active-option {
                        opacity: 1;
                    }
                }

                &.active {
                    .active-option {
                        display: none;
                    }
                }

                &.not-active {
                    .current-option-indicator {
                        display: none;
                    }
                }
            }
            label {
                display:block;
                margin-bottom:5px;
            }
            label > input[type='radio'] {
                visibility: hidden; /* Makes input not-clickable */
                position: absolute; /* Remove input from document flow */
            }
            label > img {
                max-width:100%;
            }
         }
    }

</style>
