# ArmNo's Jekyll blog

Install required gems

```sh
$ gem install jekyll rdiscount
```

Install required node packages

```sh
$ npm install
```

Running

```sh
$ gulp
$ jekyll serve -w # on another tab/window
```

Creating new post

```sh
$ rake new title="<post title>" slug="<post slug>" thumbnail="<thumbnail image url>"
```

where pameters are

- `title` (optional) - the post's title. default value is defined in [Rakefile](https://github.com/armno/armno.github.io/blob/master/Rakefile#L7).
- `slug` (optional) - the post's slug. by default, it is generated from `title`. tested with English only.
- `thumbnail` (optional) - the post's thumbnail. currently used for open graph meta tags. no default value.

### Todo

- search box in blog page (filering actually)

-ArmNo
