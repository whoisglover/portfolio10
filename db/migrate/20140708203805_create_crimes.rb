class CreateCrimes < ActiveRecord::Migration
  def change
    create_table :crimes do |table|
      table.text :description
      table.string :dayofweek
      table.string :resolution
      table.string :date
      table.string :address
      table.float :xCoord
      table.float :yCoord
    end
  end
end
