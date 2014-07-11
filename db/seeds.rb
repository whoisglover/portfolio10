require 'httparty'
i = 0

while i<30000 do
  response = HTTParty.get("http://data.sfgov.org/resource/tmnf-yvry.json?$offset=#{i}")
  response.each do |event|
    if event['category'] != "NON-CRIMINAL"
      Crime.create(description: event['descript'], category: event['category'], dayofweek: event['dayofweek'], resolution: event['resolution'], date: event['date'], address: event['address'], district: event['pddistrict'],xCoord: event['x'], yCoord: event['y'])
    end
  end
  i += 1000
end
