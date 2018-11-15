/*
 * JavaScript MD5 Demo JS
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global md5 */

; (function () {
  'use strict'


  document.getElementById('calculate').addEventListener(
    'click',
    function (event) {

      var uniqueId = "00089183"
      var key = document.getElementById('input').value
      var did = "iPhone 6-1542178492489"
      // var rTime = new Date().getTime()
      var rTime = "14:30"
      console.log(rTime)
      var input = '' + key + did + rTime
      event.preventDefault()
      var token = document.getElementById('result').value = md5(input)

      // const Http = new XMLHttpRequest();
      // const url = 'http://127.0.0.1:9999/ditui/app/performance/myTeam.do';
      // Http.open("GET", url);
      // Http.setRequestHeader('uniqueId', uniqueId)
      // Http.setRequestHeader("did", did)
      // Http.setRequestHeader("rTime", rTime)
      // Http.setRequestHeader("token", token) // add header then CORS rule violate
      // Http.send();
      // Http.onreadystatechange = (e) => {
      //   console.log(Http.responseText)
      // }

      $.ajax({
        url: "http://127.0.0.1:9999/ditui/app/performance/myTeam.do", success: function (result) {
          // $("#input").html(result);
          console.log(result);
        }
      });

    }
  )
  input.value = 'ce8e30d9-f2d1-4ba0-b174-45a661caaa84'
}())
