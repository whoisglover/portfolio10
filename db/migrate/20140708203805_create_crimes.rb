class CreateCrimes < ActiveRecord::Migration
  def change
    create_table :crimes do |table|
      table.text :description
      table.string :category
      table.string :dayofweek
      table.string :resolution
      table.string :date
      table.string :address
      table.string :district
      table.float :xCoord
      table.float :yCoord
    end
  end
end
