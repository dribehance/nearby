// by dribehance <dribehance.kksdapp.com>
angular.module("Nearby").factory("platformServices", function($rootScope, $window, errorServices, toastServices, config) {
    // ios javascript cord invoke
    $window.connectWebViewJavascriptBridge = function(callback) {
        if ($window.WebViewJavascriptBridge) {
            callback(WebViewJavascriptBridge)
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function() {
                callback(WebViewJavascriptBridge)
            }, false)
        }
    }
    return {
        init: function() {
            if (!this.isNative()) {
                return;
            }
            // back
            if (this.isAndroid()) {
                $rootScope.back = this.androidBack;
            }
            if (this.isIos()) {
                $rootScope.back = this.iosBack;
            }
        },
        isAndroid: function() {
            var ua = $window.navigator.userAgent.toLowerCase();
            if (ua.indexOf("android") != -1) {
                return true;
            }
            return false;
        },
        isIos: function() {
            var ua = $window.navigator.userAgent.toLowerCase();
            if (ua.indexOf("ios") != -1) {
                return true;
            }
            return false;
        },
        isNative: function() {
            if (this.isAndroid() || this.isIos()) {
                return true;
            }
            return false;
        },
        androidBack: function() {
            android.mygoBack();
        },
        iosBack: function() {
            $window.connectWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler("iosBack", {}, function(data) {});
            });
        },
        notify: function(message) {
            if (!this.isNative()) {
                return;
            }
            // alert("TOKEN_INVALID")
            if (this.isAndroid()) {
                android.toLogin();
            }
            if (this.isIos()) {
                $window.connectWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler("toLogin", {}, function(data) {});
                });
            }
        },
        sendBonus: function() {
            if (!this.isNative()) {
                return;
            }
            alert("invoke sendBonus")
            // alert("TOKEN_INVALID")
            if (this.isAndroid()) {
                android.sendBonus();
            }
            if (this.isIos()) {
                $window.connectWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler("sendBonus", {}, function(data) {});
                });
            }
        },
        getLocation: function() {
            if (!this.isNative()) {
                return;
            }
            alert("invoke getLocation")
            // alert("TOKEN_INVALID")
            if (this.isAndroid()) {
                android.getLocation();
            }
            if (this.isIos()) {
                $window.connectWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler("getLocation", {}, function(data) {});
                });
            }
        },
        share: function() {
            if (!this.isNative()) {
                return;
            }
            alert("invoke share")
            // alert("TOKEN_INVALID")
            if (this.isAndroid()) {
                android.share();
            }
            if (this.isIos()) {
                $window.connectWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler("share", {}, function(data) {});
                });
            }
        },
        dial: function() {
            if (!this.isNative()) {
                return;
            }
            alert("invoke dial")
            // alert("TOKEN_INVALID")
            if (this.isAndroid()) {
                android.dial();
            }
            if (this.isIos()) {
                $window.connectWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler("dial", {}, function(data) {});
                });
            }
        },
        editInfo: function() {
            if (!this.isNative()) {
                return;
            }
            alert("invoke editInfo")
            // alert("TOKEN_INVALID")
            if (this.isAndroid()) {
                android.editInfo();
            }
            if (this.isIos()) {
                $window.connectWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler("editInfo", {}, function(data) {});
                });
            }
        },
        editPartime: function() {
            if (!this.isNative()) {
                return;
            }
            alert("invoke editPartime")
            // alert("TOKEN_INVALID")
            if (this.isAndroid()) {
                android.editPartime();
            }
            if (this.isIos()) {
                $window.connectWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler("editPartime", {}, function(data) {});
                });
            }
        }
    }
});
