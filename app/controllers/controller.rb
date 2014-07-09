get '/' do

  erb :index
end

get '/crimes' do

  @crimes = Crime.all
  erb :crimes
end

get '/crimes/100' do
  @crime = Crime.limit(5000)
  @crime.to_json
end
