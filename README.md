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

both `title`, `slug` and `thumbnail` are optional. default value for `title` is defined in Rakefile. default slug is generated from post title. thumnail has no default value.

### Todo

- search box in blog page (filering actually)

-ArmNo
