class RemovePriceFromTemplates < ActiveRecord::Migration[7.0]
  def change
    remove_column :templates, :price, :integer
  end
end
