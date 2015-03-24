# ArmNo's Jekyll blog

Install required gems.

```sh
$ gem install jekyll
```

Install required node packages.

```sh
$ npm install
```

Running

```sh
$ gulp
$ jekyll serve # on another tab/window
```

> I'm working on combining `gulp watch` and `jekyll serve` into 1 command. (PR welcomed!)

Creating new post

```sh
$ rake new title="<post title>" slug="<post slug>" thumbnail="<thumbnail image url>"
```

parameters (all of them are optional)

- `title` - the post's title. default value is defined in [Rakefile](https://github.com/armno/armno.github.io/blob/master/Rakefile#L7).
- `slug` - the post's slug. by default, it is generated from `title`. tested with English only.
- `thumbnail` - the post's thumbnail. currently used for open graph meta tags. no default value.

-Armno
