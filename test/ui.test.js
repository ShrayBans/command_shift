'use strict'
var chai = require('chai'); 
var chaiHttp = require('chai-http');
var utils = require('./utils');
var should = chai.should(); 
var exportObj = require('./../Server/Nurse/nurseMdl');
var beds = require('./../Server/Bed/BedMdl');
var Nurses = exportObj.nurse;
//utils();
// var config = require('./config.js')
var nurseCtrl = require('./../Server/Nurse/nurseCtrl');
var request = require('supertest')



chai.use(chaiHttp); 

describe('ADMIN PAGE', function() {
	var url = 'http://localhost:3000';

	describe('APP', function(){
		it('should return 200 status on request to admin home page', function(done){
			chai.request(url)
			.get('/')
			.end(function(err,res){
				res.should.have.status(200); 
				done();
				})
			})	
		
		it('should return 400 status on request to non-existant page', function(done){
			chai.request(url)
			.get('/testing')
			.end(function(err,res){
				res.should.have.status(404); 
				done();
				})
			})
		}); 	
	describe('General user input', function(){
		it('should not GET or POST if non-alphanumeric input is entered', function(done){
			var n = {
				hello: '*&(*&%&*^%)'
			};
			chai.request(url)

				.post('/nurse')
				.type('form')
				.send(n)
				.end(function(err, res) {
				res.should.not.have.status(200)
				done(); 
			})
		})
	})

	describe('#add()', function() {
		it('should add nurse through middleware if proper format is used', function(done){
			var n = {
				first:'Scott',
				last:'ToAdd'
			};
			var nx = JSON.stringify(n);
			chai.request(url)
				.post('/nurse')
				.type('form')
				.send(n)
				.end(function(err, res) {
				res.should.have.status(200)
				done(); 
			})
		})
		it('should not add nurse through middleware if incorrect format is used', function(done){
			var n = {
				first:'!!Scott**)',
				last:'Mi)(*^&llerT'
			};
			chai.request(url)
				.post('/nurse')
				.type('form')
				.send(n)
				.end(function(err, res) {
				res.should.not.have.status(200)
				done(); 
			})
		})

		it('should not allow duplicate nurses in database', function(done){
			var n = {
				first:'Scott',
				last:'ToAdd'
			};
			chai.request(url)
				.post('/nurse')
				.type('form')
				.send(n)
				.end(function(err, res) { 
				res.should.not.have.status(200)	
				done(); 
			})
		})
	})
	

	describe('#remove()', function() {
		it('should remove nurse from database if nurse exists, and format is correct pt 1 - Add bad nurse',function(done){
			var n = {
				first:'Scott',
				last:'ToDelete'
			};
			chai.request(url)
				.post('/nurse')
				.type('form')
				.send(n)
				.end(function(err, res) {
				res.should.have.status(200)
				done(); 
			})
		})

		it('should remove nurse from database if nurse exists, and format is correct pt 2 - Delete bad nurse', function(done) {
			var m = {
				first:'Scott',
				last:'ToDelete'
			};
			chai.request(url)
				.delete('/nurse')
				.type('form')
				.send(m)
				.end(function(err, res) {
				res.should.have.status(200)
				done(); 
			})
		})
		it('should throw error if nurse does not exist in database', function(done) {
			var x = {
				first:'Cole',
				last:'NotInDataBase'
			};
			chai.request(url)
				.delete('/nurse')
				.type('form')
				.send(x)
				.end(function(err, res) {
				res.should.not.have.status(200)
				done(); 
			})
		})
	})
	describe('#discharge()', function() {
		it('should allow discharge if input properly formatted', function(done){
			var o = {
				emptyBeds: [ '1A' ]
			};
	
			
			chai.request(url)
				.post('/emptyBeds')
				// .set('Content-Type', 'application/json')
				.type('form')
				.send(o)
				.end(function(err, res) {
				res.should.have.status(200)
				done(); 
			})
		})
		it('should reject discharge if input not properly formatted', function(done){
				var b = {90: 2390}
			chai.request(url)
				.post('/emptyBeds')
				.type('form')
				.send(b)
				.end(function(err, res) {
				res.should.have.status(500)
				done(); 
			})
		})
		xit('should throw error if bed does not exist in database', function(done) {
			var o = {
				emptyBeds: [ '1111A' ]
			};

			chai.request(url)
			.post('/emptyBeds')
			.type('form')
			.send(o)
			.end(function(err, res) {
			res.should.not.have.status(200)
			done(); 
			})
		})

		xit('should throw error if bed is already unoccupied in database')

})

	
	
	describe('#admit()', function() {

			it('should allow admit bed if input properly formatted', function(done){
			var o = {
				addBeds: [ '1A' ]
			};
	
			
			chai.request(url)
				.post('/addBeds')
				// .set('Content-Type', 'application/json')
				.type('form')
				.send(o)
				.end(function(err, res) {
				res.should.have.status(200)
				done(); 
			})
		
	})

		it('should throw error if bed is already occupied in database')
		xit('should throw error if bed does not exist in database', function(done) {

			var o = {
			addBeds: [ '111111A' ]
			};

			chai.request(url)
			.post('/addBeds')
			.type('form')
			.send(o)
			.end(function(err, res) {
			res.should.not.have.status(200)
			done(); 
			})

		})


})

})





