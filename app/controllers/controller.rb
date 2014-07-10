get '/' do

  erb :index
end

get '/crimes' do
  # Crime.where("date > ?", "#{prev.to_time.to_i}").count
  @crimes = Crime.all
  erb :crimes
end

get '/crimes/100' do
  @crime = Crime.limit(5000)
  @crime.to_json
end

get '/graphs' do

  erb :graphs
end

get '/crimes/categories' do
  @crime_categories = Crime.group(:category).count
  @crime_categories.to_json
end