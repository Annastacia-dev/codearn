class AddPriceToTemplates < ActiveRecord::Migration[7.0]
  def change
    add_column :templates, :price, :integer
  end
end
