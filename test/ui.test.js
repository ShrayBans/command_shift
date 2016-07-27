'use strict'
var chai = require('chai'); 
var chaiHttp = require('chai-http');
var utils = require('./utils');
var should = chai.should(); 
var exportObj = require('./../Server/Nurse/nurseMdl');
var beds = require('./../Server/Bed/BedMdl');
var Nurses = exportObj.nurse;
//utils();

var nurseCtrl = require('./../Server/Nurse/nurseCtrl');
var request = require('supertest')

//following 'add' should only be letters
//no fucking weird characters everywhere
//gotta have two names
//discharge has to be existing bed in DB
//admit has to be exisitng bed
//remove has to be existing nurse


// describe('loading express', function () {
//   var url = 'http://localhost:3000';
//   it('responds to /', function testSlash(done) {
//   request(url)
//     .get('/')
//     .expect(200, done);
//   });
//   it('404 everything else', function testPath(done) {
//     request(server)
//       .get('/foo/bar')
//       .expect(404, done);
//   });
// });


	// 		.end(function(err, res) {
	// 		if (err || !res.ok){
	// 			console.log('ERRRROOORRR!!!')
	// 		}
	// 		else{
	// 			console.log('this workds great!!!!')
	// 		}
	// 			console.log('skipped end'); 
	// 			res.status.should.equal('bananas')
				
	// 		})
	// 		done();
	// 	})
	// })


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
				last:'Millertest'
			};
			chai.request(url)
				.post('/nurse')
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
				.send(n)
				.end(function(err, res) {
				res.should.not.have.status(200)
				done(); 
			})
		})

		it('should not allow duplicate nurses in database', function(done){
			var n = {
				first:'Scott',
				last:'Millertest'
			};
			chai.request(url)
				.post('/nurse')
				.send(n)
				.end(function(err, res) { 
			})
			var m = {
				first:'Scott',
				last:'Millertest'
			};
			chai.request(url)
				.post('/nurse')
				.send(m)
				.end(function(err, res) { 
				res.should.not.have.status(200)	
				done(); 
			})
		})
	})
	

	describe('#remove()', function() {
		it('should remove nurse from database if nurse exists, and format is correct',function(done){
			var n = {
				first:'Scott',
				last:'Millertest'
			};
			chai.request(url)
				.post('/nurse')
				.send(n)
				.end(function(err, res) { 
			})

			chai.request(url)
				.delete('/nurse')
				.send(n)
				.end(function(err, res) {
				res.should.have.status(200)
				done(); 
			})
		})

		it('should throw error if first and last name are not entered', function(done) {

			chai.request(url)
				.delete('/nurse')
				.send({})
				.end(function(err, res) {
				res.should.not.have.status(200)
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
				.send(x)
				.end(function(err, res) {
				res.should.not.have.status(200)
				done(); 
			})
		})
	})
	describe('#discharge()', function() {
		it('should allow discharge if input properly formatted', function(done){
			chai.request(url)
				.post('/emptyBeds')
				.send({ emptyBeds: ['1A', '2', '4'] })
				.end(function(err, res) {
				res.should.have.status(200)
				done(); 
			})
		})
		it('should not allow discharge if input not properly formatted', function(done){
				var b = {
					emptyBeds: ['1A']
				}
			chai.request(url)
				.post('/emptyBeds')
				.send(b)
				.end(function(err, res) {
				res.should.have.status(500)
				done(); 
			})
		})
		it('should throw error if bed does not exist in database')
		it('should throw error if bed is already unoccupied in database')
	})
	describe('#admit()', function() {
		it('should throw error if bed does not exist in database')
		it('should throw error if bed is already occupied in database')
	})
})






