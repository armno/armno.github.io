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

Creating new

```sh
$ rake new_post title="<post title>" slug="<post slug>"
```

both `title` and `slug` are optional. default value for `title` is defined in Rakefile. default slug is generated from post title.

### Todo

- search box in blog page (filering actually)

-ArmNo
