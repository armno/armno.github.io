# from this gist https://gist.github.com/stammy/792958
# rake new_post title="" slug=""
desc "create new post"
task :new_post do

    layout = "default"
    title = ENV["title"] || "New blog post"
    slug = ENV["slug"] || title.gsub(' ', '-').downcase

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
---

HTML

    # map variables to post's content
    post.gsub!("TITLE", title).gsub!("LAYOUT", layout)

    # write post's content into the file
    File.open(path, "w") do |file|
        file.puts post
    end

    puts "new post was generated in #{path}"
end