var Generator = require('yeoman-generator');

class MyBase extends Generator {

    //Helpers can go here on a base clase
    helper() {
        console.log('methods on the parent generator won\'t be called automatically');
    }
}

module.exports = class extends MyBase {

    // The name `constructor` is important here
    constructor(args, opts) {
    
    // Calling the super constructor is important so our generator is correctly set up
      super(args, opts);
  
      this.argument("appname", { type: String, required: false });

      // Next, add your custom code
      this.option('babel'); // This method adds support for a `--babel` flag


      //Helpers can also go here as instance methods
      this.helperMethod = function () {
        console.log('won\'t be called automatically');
      };

    }

    paths() {
        this.log('paths');
        
        //this.destinationRoot('new/path')
        //this.sourceRoot('new/template/path').

        this.log("destinationRoot", this.destinationRoot());
        this.log("sourceRoot", this.sourceRoot());

        // returns '~/projects'
    
        //this.destinationPath('index.js');
        // returns '~/projects/index.js'

        //this.templatePath('index.js');
        // returns './templates/index.js'
      }

    initializing() {
        this.log('initializing');

        this.composeWith(require.resolve('../hello'));
        //this.composeWith(require.resolve('../electric'));

        this.log("app name", this.options.appname);
        this.log("babel", this.options.babel);
    }

    async prompting() {
        this.log('prompting');

        this.answers = await this.prompt([
            {
              type: "input",
              name: "name",
              message: "Your project name",
              default: this.appname // Default to current folder name
            },
            {
              type: "confirm",
              name: "cool",
              message: "Would you like to enable the Cool feature?"
            },
            {
                type: "input",
                name: "username",
                message: "What's your GitHub username",
                store: true
              }
          ]);
      

    }

    configuring() {
        this.log('configuring');
    }

    default() {
        this.log('default');
    }

    writing() {
        this.log('writing');

        //var beautify = require("gulp-beautify");
        //this.registerTransformStream(beautify({ indent_size: 2 }));

        this.log("app name", this.answers.name);
        this.log("cool feature", this.answers.cool);

        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('public/index.html'),
            { title: 'Templating with Yeoman' }
          );
    }

    conflicts() {
        this.log('conflicts');
    }

    install() {
        this.log('install');
    }

    end() {
        this.log('end');
    }

    method1() {
        this.log('method 1 just ran');
    }

    method2() {
        this.log('method 2 just ran');
    }

    

  };

