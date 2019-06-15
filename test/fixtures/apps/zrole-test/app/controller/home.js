'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.zrole.name;
  }

  async anonymous() {
    this.ctx.body = 'hi, anonymous';
  }

  async middle() {
    this.ctx.body = 'hi, middle';
  }
}

module.exports = HomeController;
