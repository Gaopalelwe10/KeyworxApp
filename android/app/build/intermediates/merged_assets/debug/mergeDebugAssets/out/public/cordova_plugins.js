
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "mx.ferreyra.callnumber.CallNumber",
          "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
          "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
          "call"
        ]
        },
      {
          "id": "cordova-plugin-contacts.Contact",
          "file": "plugins/cordova-plugin-contacts/www/Contact.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "Contact"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactAddress",
          "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactAddress"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactError",
          "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactError"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactField",
          "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactField"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactFindOptions",
          "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactFindOptions"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactName",
          "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactName"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactOrganization",
          "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactOrganization"
        ]
        },
      {
          "id": "cordova-plugin-email-composer.EmailComposer",
          "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
          "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
          "cordova.plugins.email"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-contacts.contacts",
          "file": "plugins/cordova-plugin-contacts/www/contacts.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "navigator.contacts"
        ]
        },
      {
          "id": "es.keensoft.fullscreenimage.FullScreenImage",
          "file": "plugins/es.keensoft.fullscreenimage/www/fullscreenimage.js",
          "pluginId": "es.keensoft.fullscreenimage",
        "clobbers": [
          "window.FullScreenImage"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "cordova-plugin-contacts.convertUtils",
          "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
          "pluginId": "cordova-plugin-contacts"
        },
      {
          "id": "cordova-plugin-contacts.ContactFieldType",
          "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
          "pluginId": "cordova-plugin-contacts",
        "merges": [
          ""
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "mx.ferreyra.callnumber": "0.0.2",
      "cordova-plugin-contacts": "3.0.1",
      "cordova-plugin-email-composer": "0.9.2",
      "es.keensoft.fullscreenimage": "1.0.1",
      "cordova-plugin-device": "2.0.3",
      "cordova-plugin-statusbar": "2.4.3",
      "cordova-plugin-whitelist": "1.3.4"
    };
    // BOTTOM OF METADATA
    });
    