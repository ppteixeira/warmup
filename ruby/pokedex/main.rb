
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require_relative 'models/pokemon'
require_relative 'db_config'
require 'pry'
get '/' do
  @pokemons = Pokemon.all
  erb :index
end

get '/new' do

  erb :new
end

post '/create' do

  pokemon = Pokemon.new
  pokemon.nickname = params[:nickname]
  pokemon.species = params[:species]
  pokemon.level = params[:level]
  pokemon.save
  redirect to '/'
end
