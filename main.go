package main

import (
	"net/http"

	"./ManyoConv"

	"github.com/gin-gonic/gin"
)

// ConvertTarget is PostData from JSON
type ConvertTarget struct {
	Manyo string `form:"manyo" json:"manyo" xml:"manyo" binding:"required"`
	Kana  string `form:"kana" json:"kana" xml:"kana"`
}

// Convert is
func Convert(c *gin.Context) {
	var json ConvertTarget
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	json.Kana = ManyoConv.ConvertManyoToKana(json.Manyo)

	c.JSON(http.StatusOK, json)
}

func main() {
	r := gin.Default()
	r.Static("/", "./frontend/dist")
	r.POST("/convert", Convert)
	r.Run(":8080")
}
