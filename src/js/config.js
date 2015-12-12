angular.module("Nearby").constant("config", {
    url: "http://souba.kksdapp.com:8080",
    imageUrl:"http://souba.kksdapp.com:8080/files/image?name=",
    request: {
        "SUCCESS": "200",
        "TOKEN_INVALID":"405"
    },
    response: {
        "SUCCESS":20
    },
    common_params: {},
});
