const settings = {
  "name": "wpcamp-demo",
  "state": {
    "frontity": {
      "url": "https://dev21.weband.hu/",
      "title": "weband Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/bootstrap-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "cimlap",
              "/"
            ],
            [
              "design",
              "/category/design/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://dev21.weband.hu/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
