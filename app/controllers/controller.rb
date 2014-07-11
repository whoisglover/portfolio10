get '/' do

  erb :index
end

get '/crimes/categories' do
  @crime_categories = Crime.group(:category).count
  @crime_categories.to_json
end

get '/all' do
  p 'youre in crimes/all'
  @crimes = Crime.select([:description, :category, :xCoord, :yCoord]).all
  @crimes.to_json
end

get '/crimes/test/:days' do
  days = params[:days].to_i
  last = Crime.first.date.to_i
  p x = Time.at(last).to_datetime
  p desired_date = x - days
  @crimes = Crime.where("date > ?", "#{desired_date.to_time.to_i}")
  erb :crimes
end

get '/crimes/:days' do
  days = params[:days].to_i
  last = Crime.first.date.to_i
  p x = Time.at(last).to_datetime
  p desired_date = x - days
  @crime = Crime.where("date > ?", "#{desired_date.to_time.to_i}")
  @crime.to_json
end

get '/charts/:id' do
  x = "chart#{params[:id]}"
  erb x.to_sym
end


get '/sf/map/week-points' do
  erb :week_map_points
end

get '/sf/map/month-points' do
  erb :month_map_points
end

get '/sf/map/week-heat' do
  erb :week_map_heat
end

get '/sf/map/month-heat' do
  erb :month_map_heat
end

get '/sf/map/forever-heat' do
  erb :forever_map_heat
end



get '/map/router' do
  p params
  city = params['citylist']
  mapTime = params['mapTime']
  mapType = params['mapType']
  redirect "/#{city}/map/#{mapTime}-#{mapType}"
end