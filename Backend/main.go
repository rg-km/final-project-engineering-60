package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"

	"github.com/rg-km/final-project-engineering-60/Backend/api"
	"github.com/rg-km/final-project-engineering-60/Backend/repository"
)

func main() {
	db, err := sql.Open("sqlite3", "Backend/database/migration/bhineka.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)

	mainAPI := api.NewAPI(*usersRepo)
	mainAPI.Start()
}
