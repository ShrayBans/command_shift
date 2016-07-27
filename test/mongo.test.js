'use strict'

var utils = require('./utils');
var should = require('should');
var exportObj = require('./../Server/Nurse/nurseMdl');
var beds = require('./../Server/Bed/BedMdl');
var Nurses = exportObj.nurse;
//utils();
var nurseCtrl = require('./../Server/Nurse/nurseCtrl');
var request = require('supertest')

describe('Nurse model', function() {

	describe('#add()', function() {
		it('should be able to add a nurse to the DB', function(done) {
			var a = {
				first: 'mongoooo', 
				last: 'testerson'
			}; 
			Nurses.create(a, function(err, createdNurse){
				should.not.exist(err); 
				createdNurse.first.should.equal('mongoooo'); 
				createdNurse.last.should.equal('testerson'); 
				 done(); 
			});
		});
	
	});

	describe('#remove()', function() {
		it('should be able to remove a nurse from the DB', function(done) {
			var a = {
				first: 'mongoooo', 
				last: 'testerson'
			}; 
			Nurses.remove(a, function(err, createdNurse){
				createdNurse.should.not.exist; 
				should.not.exist(err);
				
				 done(); 
			});
		});
	
	});

 });

describe('Bed model', function() {
	describe('#discharge()', function() {
		it('bed moves to Unoccupied status', function(done) {
			var st = {
				bed: '2',
				status: true
			}
			beds.update(st, {$set : {status: false}}, function(err, updatedBed) {
				// should.not.exist(err);
				// console.log('UPDATED BED', updatedBed)

				beds.findOne({bed: '2', status: false}, function(err, daBed) {
				if(err) throw err; 
				daBed.status.should.equal(false);
				daBed.should.exist; 
				done();
				})
				
			})
				 
			});
		});
	
	describe('#admit()', function() {
		it('empty bed recategorized to occupied beds', function(done) {
			var st = {
				bed: '2',
				status: false
			}
			beds.update(st, {$set : {status: true}}, function(err, updatedBed) {
				// should.not.exist(err);
				// console.log('UPDATED BED', updatedBed)

				beds.findOne({bed: '2', status: true},function(err, daBed) {
				if(err) throw err; 
				daBed.status.should.equal(true);
				daBed.should.exist; 
				done();
				})
				
			})
				 
			});
		});
	
	});




	// describe('Routing', function() {
		
	// 	describe('Adding nurse to DB', function() {
	// 		it('should add a nurse to the DB through middleware', function(done) {

			// var url = 'http://localhost:3000';

			// var n = {
			// 	first:'middleware',
			// 	last:'congo'
			// }
			// var m = JSON.stringify(n)

			// request(url)
			// .post('/nurse')
			// .send(m)
			// .end(function(err, res) {
			// if (err || !res.ok){
			// 	console.log('ERRRROOORRR!!!')
			// }
			// else{
			// 	console.log('this workds great!!!!')
			// }
			// 	console.log('skipped end'); 
			// 	res.status.should.equal('bananas')
				
			// })
			// done();
	// 	})
	// 	})
	// })



		// describe('Adding nurse to DB', function() {
		// 	it('should add a nurse to the DB through middleware', function(done) {

		// 	var url = 'http://localhost:3000';

		// 	var n = {
		// 		first:'middleware',
		// 		last:'congo'
		// 	}
		// 	request(url)
		// 	.post('/nurse')
		// 	.send(n)
		// 	.end(function(err, res, done) {
		
		// 		res.status.should.equal(200)
				
		// 	})
		// 	done();
		// })
		// it('should throw error when trying to add duplicate to the DB through middleware', function(done) {

		// 	var url = 'http://localhost:3000';

		// 	var n = {
		// 		first:'middleware',
		// 		last:'congo'
		// 	}
		// 	request(url)
		// 	.post('/nurse')
		// 	.send(n)
		// 	.end(function(err, res, done) {
		// 		throw err;
		// 		console.log('ERROR FUCKER')
				
		// 		res.status.should.equal(200);
				
		// 	})
		// 	done();
	


	// it('should add a nurse using middleware', function(done) {
		// 	var a = {
		// 		first: 'middlewareee', 
		// 		last: 'testerson'
		// 	}; 
		// 	nurseCtrl.add(a, function(err, createdNurse){
		// 		should.not.exist(err); 
		// 		createdNurse.first.should.equal('mongo'); 
		// 		createdNurse.last.should.equal('testerson'); 
		// 		done(); 
		// 	});
		// }); 
		// it('should reject duplicate nurse', function(done) {
		// 	var a = {
		// 		first:'test',
		// 		last:'testerson'
		// 	}
		// 	nurseCtrl.add(a, function(err, createdNurse) {})
		// })