require 'rubygems'
require 'rake'
require 'yaml'
require 'time'

SOURCE = "."
CONFIG = {
  'layouts' => File.join(SOURCE, "_layouts"),
  'posts' => File.join(SOURCE, "_posts"),
  'post_ext' => "md",
}

desc "Set up environment"
task :setup do
  system "bundle install --path vendor/bundle"
end # task :setup

desc "Launch preview environment"
task :serve do
  system "bundle exec jekyll serve -w -H 0.0.0.0"
end # task :serve

desc "Launch preview environment"
task :preview do
  system "bundle exec jekyll serve -w -H 0.0.0.0"
end # task :preview

desc "Create a new tutorial"
task :tutorial do
  abort("Error: tutorial title not given, or too many arguments.") if ARGV.length != 2
  ARGV.each {|a| task a.to_sym do; end}
  title = ARGV[1]
  tutorial = ARGV[1].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  abort("Error: directory already exists: '_#{tutorial}'") if File.exist?("_#{tutorial}")

  puts "Creating new tutorial: #{tutorial}"
  puts "  ==> creating tutorial directory: _#{tutorial}"
  Dir.mkdir "_#{tutorial}"

  tutorial_images = "assets/images/#{tutorial}"
  puts "  ==> creating new tutorial images directory: #{tutorial_images}"
  Dir.mkdir tutorial_images

  # index
  open("_#{tutorial}/index.md", 'w') do |f|
    f.puts '---'
    f.puts "redirect_to: /#{tutorial}/01-overview"
    f.puts '---'
  end

  puts "  ==> creating first page: _#{tutorial}/01-overview.md"
  open("_#{tutorial}/01-overview.md", 'w') do |f|
    f.puts '---'
    f.puts 'title: Overview'
    f.puts 'order: 1'
    f.puts 'duration: 1'
    f.puts '---'
    f.puts ''
    f.puts 'This tutorial... (replace this) '
    f.puts ''
    f.puts '### What you\'ll learn'
    f.puts ''
    f.puts '- '
    f.puts '- '
    f.puts '- '
    f.puts ''
    f.puts '### What you\'ll need'
    f.puts ''
    f.puts '- '
    f.puts '- '
    f.puts '- '
  end

  puts '  ==> updating site configuration: _config.yml'
  open("_config.yml", 'a') do |f|
    f.puts "  #{tutorial}:"
    f.puts '    output: true'
    f.puts '    permalink: /:collection/:name'
    f.puts "    title: #{title}"
    f.puts "    summary: A tutorial for #{title}"
    f.puts '    categories: Beginner # Beginner|Intermediate|Advanced'
    f.puts '    tags:'
    f.puts '      - Tutorial'
    f.puts '    difficulty: 1 # number from 1 to 5'
    f.puts '    duration: 10 # number of minutes'
    f.puts '    status: draft # draft or published'
    f.puts "    published: #{Time.now.strftime('%Y-%m-%d')}"
    f.puts '    author: Your Name <your.name@email.domain>'
    f.puts ''
  end

  puts ''
  puts "----------------------------------------------------------------------"
  puts "A new skeleton tutorial has been created at _#{tutorial}, an"
  puts "images directory created at #{tutorial_images} and the"
  puts "the initial configuration added to the end of _config.yml."
  puts "Please edit _config.yml and update the metadata for the new tutorial."
  puts "----------------------------------------------------------------------"
  puts ''
end # task :test


def ask(message, valid_options)
  if valid_options
    answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/, /,'/')} ") while !valid_options.include?(answer)
  else
    answer = get_stdin(message)
  end
  answer
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end

#Load custom rake scripts
Dir['_rake/*.rake'].each { |r| load r }
