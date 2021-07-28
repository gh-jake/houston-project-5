class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string :title
      t.string :years
      t.string :rated
      t.string :seasons
      t.string :genres
      t.string :plot
      t.string :imdb_rating
      t.boolean :watched
      t.string :imdb_id
      t.integer :user_id

      t.timestamps
    end
  end
end
