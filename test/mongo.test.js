'use strict'

var utils = require('./utils');
var should = require('should');
var exportObj = require('./../Server/Nurse/nurseMdl');
var Nurses = exportObj.nurse;
//utils();

describe('Nurse model', function() {

	describe('#add()', function() {
		it('should add a nurse', function(done) {
			var a = {
				first: 'test', 
				last: 'testerson'
			}; 
			Nurses.create(a, function(err, createdNurse){
				should.not.exist(err); 
				createdNurse.first.should.equal('test'); 
				createdNurse.last.should.equal('testerson'); 
				done(); 
			});
		}); 
	});
});