module CrimeScraper

  class Client
    include HTTParty

    base_uri "http://data.sfgov.org/resource/tmnf-yvry.json"
    # base_uri "http://api.ihackernews.com"

    def initialize

    end

    def posts
      # response = self.class.get('/some/endpoint', {
      #   query: { with: 'paramaters' }
      #   })
      response = self.class.get('/')
      return response.body
    end

    def new_post(user_id, api_key, title, body)
      response = self.class.post('/posts/new', {
        body: {user_id: user_id, api_key: api_key, title: title, body: body}
        })
    end

  end

end