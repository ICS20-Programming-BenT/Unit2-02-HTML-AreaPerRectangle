// Copyright (c) 2022 Ben Thomson All rights reserved
//
// Created by: Ben Thomson
// Created on: Mar 2022
// This file contains the JS functions for index.html

function doPandAClicked () {
  // This function does basic perimeter and area math.
  document.getElementById('perimeter-math').innerHTML = 'The perimeter of the table is ' + (2 * 500 + 2 * 300) + "cm<sup>2</sup>"
  document.getElementById('area-math').innerHTML = 'The area of the table is ' + (500 * 300) + "cm<sup>2</sup>"
}