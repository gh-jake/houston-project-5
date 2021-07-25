class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string :title
      t.integer :start_year
      t.integer :end_year
      t.integer :seasons
      t.string :category
      t.string :description
      t.integer :list_id
      t.integer :user_id

      t.timestamps
    end
  end
end
