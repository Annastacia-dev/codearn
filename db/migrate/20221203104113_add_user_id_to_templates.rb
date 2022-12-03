class AddUserIdToTemplates < ActiveRecord::Migration[7.0]
  def change
    add_column :templates, :user_id, :integer
  end
end
