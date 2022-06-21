package repository

import "time"

type User struct {
	ID                int64     `db:"id_user"`
	Nama              string    `db:"nama_user"`
	Email             string    `db:"email_user"`
	Username          string    `db:"username"`
	Password          string    `db:"password"`
	Tanggal_bergabung time.Time `db:"tanggal_bergabung"`
	Role              string    `db:"role"`
	Token             string    `db:"token"`
}