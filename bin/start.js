#!/usr/bin/env node

var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

// Here we register a generator based on its path. Providing the namespace
// is optional.
env.register(require.resolve('generator-chimpwizard-helloworld'), 'cw:hello');

// Or you can provide a generator constructor. Doing so, you need to provide
// a namespace manually
// var GeneratorNPM = generators.Base.extend(/* put your methods in here */);
// env.registerStub(GeneratorNPM, 'cw:hello');

// In its simplest form
env.run('cw:hello', done);

// Or passing arguments and options
//env.run('cw:hello some-name', { 'skip-install': true }, done);