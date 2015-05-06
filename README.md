# Armno's Jekyll blog

Install required gems.

```sh
$ gem install jekyll
```

Running

```sh
$ jekyll serve
```

Creating new post

```sh
# I have no idea why I'm using Rake here ...
$ rake new title="<post title>" slug="<post slug>" thumbnail="<thumbnail image url>"
```

parameters (all of them are optional)

- `title` - the post's title. default value is defined in [Rakefile](https://github.com/armno/armno.github.io/blob/master/Rakefile#L7).
- `slug` - the post's slug. by default, it is generated from `title`. tested with English only.
- `thumbnail` - the post's thumbnail. currently used for open graph meta tags. no default value.

