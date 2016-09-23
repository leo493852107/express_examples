/**
 * Created by leo on 23/09/2016.
 */

var posts = [
    { title: 'Foo', body: 'some foo bar' },
    { title: 'Foo bar', body: 'more foo bar' },
    { title: 'Foo bar baz', body: 'more foo bar baz' }
];

exports.list = function (req, res) {
    res.render('posts', { titile: 'Posts', posts: posts });
};
