package api

import (
	"fmt"
	"net/http"

	"github.com/rg-km/final-project-engineering-60/Backend/repository"
)

type API struct {
	userRepo repository.UserRepository
	mux      *http.ServeMux
}

func NewAPI(userRepo repository.UserRepository) API {
	mux := http.NewServeMux()
	api := API{
		userRepo, mux,
	}
	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/products", api.GET(http.HandlerFunc(api.userlist)))
	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}
func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8082/")
	http.ListenAndServe(":8082", api.Handler())
}