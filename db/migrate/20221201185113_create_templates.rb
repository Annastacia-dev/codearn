class CreateTemplates < ActiveRecord::Migration[7.0]
  def change
    create_table :templates do |t|
      t.string :image_url
      t.string :title
      t.text :description
      t.string :live_site
      t.text :features
      t.string :github_link
      t.string :category
      t.string :technologies

      t.timestamps
    end
  end
end
