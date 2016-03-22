// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app

        var AppView = React.createClass({

        _getCurrentDate: function(){
			var today = new Date()
			var yyyy = today.getFullYear()
			return yyyy
    	},

    	_timeMarchesOn: function(){
    		if (incrementing) {
    			this.setState({
    				incrementing: true
    			})
    		}
    		var boundIncrementer = incrementYear.bind(this)
    		this.intervalId = setInterval(boundIncrementer,100)
    		else {
          		clearInterval(this.intervalId)
          		incrementing: false
          	}
    	},

    	getInitialState: function(){
    		return {
    			incrementing: false
    		}
    	}

    	render: function() {
    		return (
    			<div className="pageContainer">			
	    			<h1 className="timeStamp">{this._getCurrentDate()}</h1>
	    			<button className="timeButton" onClick={this._timeMarchesOn}>forward</button> 
	    		</div>
    			)
    	}
    })

    DOM.render(<AppView/>, document.querySelector('.container'))
}

app()
