'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let result = await this.app.mysql.get('blog_content', {});
    this.ctx.body = result;
  }

  async getArticleList() {
    let sql =
      "select a.id, b.typeName, a.title, a.articleCointent, a.introduce, FROM_UNIXTIME(a.addTime, '%Y-%m-%d') as addTime, a.viewCount from article a, article_type b where a.typeId = b.id";
    let results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }

  async getArticleById() {
    let id = this.query.id;
    let sql =
      "select a.id, b.typeName, a.title, a.articleCointent, a.introduce, FROM_UNIXTIME(a.addTime, '%Y-%m-%d') as addTime, a.viewCount from article a, article_type b where a.typeId = b.id and a.id=" +
      id;
    let results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }
}

module.exports = HomeController;
