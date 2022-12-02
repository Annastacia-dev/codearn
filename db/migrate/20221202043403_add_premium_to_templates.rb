class AddPremiumToTemplates < ActiveRecord::Migration[7.0]
  def change
    add_column :templates, :premium, :boolean
  end
end
