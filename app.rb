require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/reloader'
require 'sinatra/json'

configure :development, :test do
  require 'pry'
end

configure do
  set :views, 'app/views'
end

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

get '/' do
  erb :index
end

get '/tasks.json' do
  tasks = Task.all

  json({
    tasks: tasks
    })
end

post '/tasks' do
  Task.create(text: params["text"], important: params["important"], urgent: params["urgent"]).to_json
end
