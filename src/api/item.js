import Parse from 'parse';

export function get() {
  return new Promise((resolve, reject) => {
    const Item = Parse.Object.extend('Item');
    const query = new Parse.Query(Item);

    query.limit(200);

    query.find({
      success: list => resolve(list),
      error: (list, err) => reject(err),
    });
  });
}

export function create(title, description) {
  return new Promise((resolve, reject) => {
    const Item = Parse.Object.extend('Item');
    const item = new Item();

    item.set('title', title);
    item.set('description', description);

    item.save(null, {
      success: res => resolve(res),
      error: (res, err) => reject(err),
    });
  });
}
