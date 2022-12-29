class CreateKudos < ActiveRecord::Migration[7.0]
  def change
    create_table :kudos do |t|
      t.string :date
      t.string :text
      t.string :category
      t.string :img_url
      t.string :gif_url
      t.string :personal_notes
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
