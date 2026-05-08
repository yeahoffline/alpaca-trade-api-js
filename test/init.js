'use strict'

require('dotenv').config()

require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised.default ?? chaiAsPromised)

const mockServer = require('./support/mock-server')

before(mockServer.start)
after(mockServer.stop)
