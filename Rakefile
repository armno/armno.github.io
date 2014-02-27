# from this gist https://gist.github.com/stammy/792958
# rake new_post title="" slug=""
desc "create new post"
task :new do

    layout = "post"
    title = ENV["title"] || "New blog post"
    slug = ENV["slug"] || title.gsub(' ', '-').downcase
    thumbnail = ENV["thumbnail"] || ""

    target_dir = "_posts"
    filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.md"

    path = File.join(target_dir, filename)

    # post's initial content (YAML Front Matter)
    post = <<-HTML
---
layout: LAYOUT
title: "TITLE"
description:
published: false
thumbnail: THUMBNAIL
---

HTML

    # map variables to post's content
    post.gsub!("TITLE", title).gsub!("LAYOUT", layout).gsub!("THUMBNAIL", thumbnail)

    # write post's content into the file
    File.open(path, "w") do |file|
        file.puts post
    end

    puts "new post was generated in #{path}"
end