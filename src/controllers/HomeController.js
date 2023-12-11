class HomeController {
  async index(req, res) {
    return res.json('index');
  }
}

export default new HomeController();
