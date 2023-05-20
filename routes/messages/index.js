const Router = require('koa-router');
const { faker } = require('@faker-js/faker');

const router = new Router();

router.get('/messages/unread', async (ctx) => {

  let obj = await JSON.stringify(createObj());

  if(obj == `false`) {
    ctx.response.status = 500;

    return
  }

  ctx.response.body = obj;
});


module.exports = router;

function createObj() {
  let array = createArray();

  if(array.length === 0) {
    return false
  }

  return {
    status: "OK",
    timestamp: Date.now(),
    messages: array
  }
}

function createArray() {
  let array = []
  let random = Math.floor(Math.random() * 4);

  for(let i = 0; i < random; i++) {
    array.push({
      id: faker.string.uuid(),
      from: faker.internet.email(),
      subject: faker.helpers.fake(
        'Hello {{person.prefix}} {{person.lastName}}'
      ),
      body: faker.helpers.fake(
        'Hello {{person.prefix}} {{person.lastName}}, how are you today?'
      ),
      received: Date.now()
    });
  }

  return array;
}



