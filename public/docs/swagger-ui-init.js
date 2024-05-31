
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "Usuarios API",
      "description": "Documentação da API de usuários"
    },
    "host": "https://api-usuarios-seven.vercel.app",
    "basePath": "/",
    "schemes": [
      "http",
      "https"
    ],
    "securityDefinitions": {
      "JWT": {
        "description": "JWT token",
        "type": "apiKey",
        "in": "header",
        "name": "Authorization"
      }
    },
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/usuarios": {
        "post": {
          "tags": [
            "Usuários"
          ],
          "description": "Endpoint para criar um usuário.",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "example": "any"
                  },
                  "email": {
                    "example": "any"
                  },
                  "age": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Created"
            },
            "400": {
              "description": "Bad Request"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        },
        "get": {
          "tags": [
            "Usuários"
          ],
          "description": "Endpoint para buscar todos os usuários.",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/usuarios/{id}": {
        "get": {
          "tags": [
            "Usuários"
          ],
          "description": "Endpoint para buscar um usuário pelo ID.",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string",
              "description": "ID do usuário."
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "404": {
              "description": "Not Found"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        },
        "patch": {
          "tags": [
            "Usuários"
          ],
          "description": "Endpoint para atualizar um usuário pelo ID.",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string",
              "description": "ID do usuário."
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "example": "any"
                  },
                  "email": {
                    "example": "any"
                  },
                  "age": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Created"
            },
            "400": {
              "description": "Bad Request"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        },
        "delete": {
          "tags": [
            "Usuários"
          ],
          "description": "Endpoint para deletar um usuário pelo ID.",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string",
              "description": "ID do usuário."
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "example": "any"
                  },
                  "email": {
                    "example": "any"
                  },
                  "age": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Created"
            },
            "400": {
              "description": "Bad Request"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      }
    },
    "definitions": {
      "Users": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": "aaaaaaaa-bbbbbbbbb-cccccccc-ddddddddd"
          },
          "name": {
            "type": "string",
            "example": "Teste"
          },
          "age": {
            "type": "number",
            "example": 21
          },
          "email": {
            "type": "string",
            "example": "teste@gmail.com"
          }
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
